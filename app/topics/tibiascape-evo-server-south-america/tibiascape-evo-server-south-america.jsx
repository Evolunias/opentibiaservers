import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-evo-server-south-america');
}

export default function TibiascapeEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-evo-server-south-america" />;
}
