import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-south-america');
}

export default function MediviaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-south-america" />;
}
