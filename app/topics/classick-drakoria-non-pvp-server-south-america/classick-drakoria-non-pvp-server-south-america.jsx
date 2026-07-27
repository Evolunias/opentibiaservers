import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-south-america');
}

export default function ClassickDrakoriaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-south-america" />;
}
