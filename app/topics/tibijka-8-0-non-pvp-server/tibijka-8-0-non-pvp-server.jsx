import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-0-non-pvp-server');
}

export default function Tibijka80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-0-non-pvp-server" />;
}
