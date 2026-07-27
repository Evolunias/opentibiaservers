import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-north-america');
}

export default function ClassicusPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-north-america" />;
}
