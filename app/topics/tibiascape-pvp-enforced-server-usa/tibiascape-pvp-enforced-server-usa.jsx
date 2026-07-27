import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-usa');
}

export default function TibiascapePvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-usa" />;
}
