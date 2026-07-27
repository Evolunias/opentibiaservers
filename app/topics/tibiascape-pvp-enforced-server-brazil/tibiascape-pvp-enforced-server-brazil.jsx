import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-brazil');
}

export default function TibiascapePvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-brazil" />;
}
