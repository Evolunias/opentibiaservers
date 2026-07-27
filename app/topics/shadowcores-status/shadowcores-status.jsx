import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-status');
}

export default function ShadowcoresStatusKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-status" />;
}
