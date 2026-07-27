import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-screenshots-server-brazil');
}

export default function ShadowcoresWithScreenshotsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-screenshots-server-brazil" />;
}
