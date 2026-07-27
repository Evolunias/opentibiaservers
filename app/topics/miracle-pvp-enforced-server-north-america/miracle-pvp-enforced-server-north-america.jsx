import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-enforced-server-north-america');
}

export default function MiraclePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-enforced-server-north-america" />;
}
