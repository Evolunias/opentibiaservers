import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-latin-america-server');
}

export default function CalmeraOtLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-latin-america-server" />;
}
