import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-non-pvp-server');
}

export default function Miracle11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-non-pvp-server" />;
}
