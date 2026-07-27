import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-argentina');
}

export default function TibiascapePvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-argentina" />;
}
