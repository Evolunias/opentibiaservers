import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-south-america');
}

export default function EvoTibiaPrivateServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-south-america" />;
}
