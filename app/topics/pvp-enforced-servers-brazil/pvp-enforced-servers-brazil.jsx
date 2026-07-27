import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-brazil');
}

export default function PvpEnforcedServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-brazil" />;
}
