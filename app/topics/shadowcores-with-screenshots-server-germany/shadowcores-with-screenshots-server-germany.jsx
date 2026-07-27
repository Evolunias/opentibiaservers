import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-germany');
}

export default function ShadowcoresWithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-germany" />;
}
