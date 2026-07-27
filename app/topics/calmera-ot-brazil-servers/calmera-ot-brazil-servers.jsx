import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-brazil-servers');
}

export default function CalmeraOtBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-brazil-servers" />;
}
