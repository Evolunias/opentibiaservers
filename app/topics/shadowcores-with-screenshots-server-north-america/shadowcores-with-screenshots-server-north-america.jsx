import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-north-america');
}

export default function ShadowcoresWithScreenshotsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-north-america" />;
}
