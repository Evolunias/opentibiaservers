import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-north-america');
}

export default function MediviaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-north-america" />;
}
