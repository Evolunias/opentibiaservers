import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-mexico');
}

export default function TibiascapePvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-mexico" />;
}
