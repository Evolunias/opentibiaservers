import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-argentina');
}

export default function ShadowcoresWithScreenshotsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-argentina" />;
}
