import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-evo-server-south-america');
}

export default function TibijkaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-evo-server-south-america" />;
}
