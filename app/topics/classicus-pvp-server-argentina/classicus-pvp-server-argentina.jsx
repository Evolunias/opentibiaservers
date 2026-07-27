import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-argentina');
}

export default function ClassicusPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-argentina" />;
}
