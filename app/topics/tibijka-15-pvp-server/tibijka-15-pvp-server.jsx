import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-pvp-server');
}

export default function Tibijka15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-pvp-server" />;
}
