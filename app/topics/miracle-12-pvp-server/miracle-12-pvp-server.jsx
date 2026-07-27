import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-pvp-server');
}

export default function Miracle12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-pvp-server" />;
}
