import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-mexico');
}

export default function PvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-mexico" />;
}
