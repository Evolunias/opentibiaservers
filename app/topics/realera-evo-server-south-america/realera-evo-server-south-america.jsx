import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-south-america');
}

export default function RealeraEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-south-america" />;
}
