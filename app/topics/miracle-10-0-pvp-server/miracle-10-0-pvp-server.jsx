import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-10-0-pvp-server');
}

export default function Miracle100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-10-0-pvp-server" />;
}
