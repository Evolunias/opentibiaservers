import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-screenshots-server-germany');
}

export default function UnlineWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="unline-with-screenshots-server-germany" />;
}
