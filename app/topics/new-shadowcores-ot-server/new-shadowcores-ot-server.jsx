import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-ot-server');
}

export default function NewShadowcoresOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-ot-server" />;
}
