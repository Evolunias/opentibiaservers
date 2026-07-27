import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-pvp-server');
}

export default function Tibianus14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-pvp-server" />;
}
