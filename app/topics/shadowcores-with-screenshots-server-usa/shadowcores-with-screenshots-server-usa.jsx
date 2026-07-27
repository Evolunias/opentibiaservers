import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-usa');
}

export default function ShadowcoresWithScreenshotsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-usa" />;
}
