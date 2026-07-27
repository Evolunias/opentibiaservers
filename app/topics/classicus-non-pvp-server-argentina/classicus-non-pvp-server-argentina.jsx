import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-argentina');
}

export default function ClassicusNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-argentina" />;
}
