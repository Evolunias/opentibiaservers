import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-enforced-server-north-america');
}

export default function ClassickDrakoriaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-enforced-server-north-america" />;
}
