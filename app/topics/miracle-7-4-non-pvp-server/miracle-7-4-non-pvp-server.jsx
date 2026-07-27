import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-7-4-non-pvp-server');
}

export default function Miracle74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-7-4-non-pvp-server" />;
}
