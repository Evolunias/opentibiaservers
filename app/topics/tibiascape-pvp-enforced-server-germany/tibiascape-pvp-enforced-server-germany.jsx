import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-germany');
}

export default function TibiascapePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-germany" />;
}
