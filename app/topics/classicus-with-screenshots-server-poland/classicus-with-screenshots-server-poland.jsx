import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-poland');
}

export default function ClassicusWithScreenshotsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-poland" />;
}
