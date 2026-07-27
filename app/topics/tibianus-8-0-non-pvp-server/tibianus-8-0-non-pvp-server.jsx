import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-non-pvp-server');
}

export default function Tibianus80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-non-pvp-server" />;
}
