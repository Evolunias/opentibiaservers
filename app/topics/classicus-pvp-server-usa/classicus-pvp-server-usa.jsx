import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-usa');
}

export default function ClassicusPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-usa" />;
}
