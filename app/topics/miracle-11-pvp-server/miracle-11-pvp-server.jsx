import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-11-pvp-server');
}

export default function Miracle11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-11-pvp-server" />;
}
