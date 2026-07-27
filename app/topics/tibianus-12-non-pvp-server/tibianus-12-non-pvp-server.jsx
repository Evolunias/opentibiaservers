import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-non-pvp-server');
}

export default function Tibianus12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-non-pvp-server" />;
}
