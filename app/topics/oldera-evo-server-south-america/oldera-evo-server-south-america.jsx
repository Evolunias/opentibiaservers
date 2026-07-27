import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-evo-server-south-america');
}

export default function OlderaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-evo-server-south-america" />;
}
