import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-evo-server-south-america');
}

export default function AureraGlobalEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-evo-server-south-america" />;
}
