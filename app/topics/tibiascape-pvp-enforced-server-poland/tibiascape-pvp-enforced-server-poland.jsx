import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-poland');
}

export default function TibiascapePvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-poland" />;
}
