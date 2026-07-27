import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-pvp-server');
}

export default function Tibijka12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-pvp-server" />;
}
