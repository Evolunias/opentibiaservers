import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-brazil-server');
}

export default function CalmeraOtBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-brazil-server" />;
}
