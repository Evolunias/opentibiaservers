import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-non-pvp-server');
}

export default function Tibijka81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-non-pvp-server" />;
}
