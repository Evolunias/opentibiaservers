import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-non-pvp-server');
}

export default function Tibijka74NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-non-pvp-server" />;
}
