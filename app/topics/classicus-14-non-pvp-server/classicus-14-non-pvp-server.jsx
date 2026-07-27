import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-14-non-pvp-server');
}

export default function Classicus14NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-14-non-pvp-server" />;
}
