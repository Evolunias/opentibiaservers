import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-south-america');
}

export default function ClassicusPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-south-america" />;
}
