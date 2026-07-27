import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-uk');
}

export default function TibiascapePvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-uk" />;
}
