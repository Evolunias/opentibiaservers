import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-mexico');
}

export default function PvpEnforcedServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-mexico" />;
}
