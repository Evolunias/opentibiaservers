import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-pvp-server');
}

export default function Tibijka81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-pvp-server" />;
}
