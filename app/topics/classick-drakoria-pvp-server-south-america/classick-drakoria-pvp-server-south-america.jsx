import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-south-america');
}

export default function ClassickDrakoriaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-south-america" />;
}
