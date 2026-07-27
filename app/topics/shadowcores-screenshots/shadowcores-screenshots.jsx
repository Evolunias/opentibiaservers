import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-screenshots');
}

export default function ShadowcoresScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-screenshots" />;
}
