import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-with-screenshots-server-germany');
}

export default function ClassicusWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-with-screenshots-server-germany" />;
}
