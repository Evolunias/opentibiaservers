import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-pvp-server');
}

export default function Tibianus71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-pvp-server" />;
}
