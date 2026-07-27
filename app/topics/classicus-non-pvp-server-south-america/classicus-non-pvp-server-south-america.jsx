import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-south-america');
}

export default function ClassicusNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-south-america" />;
}
