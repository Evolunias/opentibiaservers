import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-non-pvp-server');
}

export default function Tibijka772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-non-pvp-server" />;
}
