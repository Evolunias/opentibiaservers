import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-ot-server');
}

export default function ShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-ot-server" />;
}
