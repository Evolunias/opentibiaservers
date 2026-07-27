import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-enforced-server-north-america');
}

export default function ClassicusPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-enforced-server-north-america" />;
}
