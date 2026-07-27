import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-north-america');
}

export default function PvpEnforcedServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-north-america" />;
}
