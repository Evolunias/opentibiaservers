import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-54-pvp-server');
}

export default function Tibianus854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-54-pvp-server" />;
}
