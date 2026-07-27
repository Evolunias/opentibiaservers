import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-evo-server-south-america');
}

export default function TibianusEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-evo-server-south-america" />;
}
