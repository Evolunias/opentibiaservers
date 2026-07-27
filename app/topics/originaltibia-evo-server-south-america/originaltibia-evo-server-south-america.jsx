import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-evo-server-south-america');
}

export default function OriginaltibiaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-evo-server-south-america" />;
}
