import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-latin-america-servers');
}

export default function CalmeraOtLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-latin-america-servers" />;
}
