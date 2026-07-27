import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-canada');
}

export default function MediviaEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-canada" />;
}
