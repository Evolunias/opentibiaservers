import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-12-non-pvp-server');
}

export default function Miracle12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-12-non-pvp-server" />;
}
