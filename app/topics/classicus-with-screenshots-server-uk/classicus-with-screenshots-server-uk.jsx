import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-uk');
}

export default function ClassicusWithScreenshotsServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-uk" />;
}
