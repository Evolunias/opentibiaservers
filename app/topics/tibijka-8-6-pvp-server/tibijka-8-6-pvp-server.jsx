import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-pvp-server');
}

export default function Tibijka86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-pvp-server" />;
}
