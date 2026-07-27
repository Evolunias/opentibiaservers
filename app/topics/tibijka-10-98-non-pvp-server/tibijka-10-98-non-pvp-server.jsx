import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-98-non-pvp-server');
}

export default function Tibijka1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-98-non-pvp-server" />;
}
