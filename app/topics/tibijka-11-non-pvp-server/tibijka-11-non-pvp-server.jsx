import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-non-pvp-server');
}

export default function Tibijka11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-non-pvp-server" />;
}
