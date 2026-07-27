import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-pvp-enforced-server-latin-america');
}

export default function TibiascapePvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-pvp-enforced-server-latin-america" />;
}
