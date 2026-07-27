import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-non-pvp-server');
}

export default function Tibianus772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-non-pvp-server" />;
}
