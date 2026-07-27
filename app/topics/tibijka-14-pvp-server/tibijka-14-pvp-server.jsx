import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-14-pvp-server');
}

export default function Tibijka14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-14-pvp-server" />;
}
