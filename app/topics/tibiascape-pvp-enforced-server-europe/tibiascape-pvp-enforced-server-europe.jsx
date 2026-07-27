import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-europe');
}

export default function TibiascapePvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-europe" />;
}
