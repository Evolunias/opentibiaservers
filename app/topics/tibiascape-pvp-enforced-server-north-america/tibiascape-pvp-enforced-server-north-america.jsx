import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-north-america');
}

export default function TibiascapePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-north-america" />;
}
