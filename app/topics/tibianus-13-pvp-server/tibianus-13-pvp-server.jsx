import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-13-pvp-server');
}

export default function Tibianus13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-13-pvp-server" />;
}
