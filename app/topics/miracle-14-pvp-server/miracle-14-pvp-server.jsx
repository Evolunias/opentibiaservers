import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-14-pvp-server');
}

export default function Miracle14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-14-pvp-server" />;
}
