import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-europe');
}

export default function ClassicusWithScreenshotsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-europe" />;
}
