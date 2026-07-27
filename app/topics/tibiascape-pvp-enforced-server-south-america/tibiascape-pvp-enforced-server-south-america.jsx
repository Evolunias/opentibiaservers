import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-south-america');
}

export default function TibiascapePvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-south-america" />;
}
