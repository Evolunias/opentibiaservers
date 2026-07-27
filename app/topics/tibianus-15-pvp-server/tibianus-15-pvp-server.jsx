import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-15-pvp-server');
}

export default function Tibianus15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-15-pvp-server" />;
}
