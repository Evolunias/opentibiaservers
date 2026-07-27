import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-north-america');
}

export default function ClassickDrakoriaPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-north-america" />;
}
