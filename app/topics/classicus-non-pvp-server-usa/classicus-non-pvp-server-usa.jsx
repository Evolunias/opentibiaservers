import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-usa');
}

export default function ClassicusNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-usa" />;
}
