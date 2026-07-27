import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-canada');
}

export default function TibiascapePvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-canada" />;
}
