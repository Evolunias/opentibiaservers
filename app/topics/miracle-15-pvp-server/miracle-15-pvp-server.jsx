import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-15-pvp-server');
}

export default function Miracle15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-15-pvp-server" />;
}
