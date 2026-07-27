import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-north-america');
}

export default function ClassicusNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-north-america" />;
}
