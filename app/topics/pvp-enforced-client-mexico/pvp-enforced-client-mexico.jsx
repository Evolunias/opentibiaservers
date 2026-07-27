import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-mexico');
}

export default function PvpEnforcedClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-mexico" />;
}
