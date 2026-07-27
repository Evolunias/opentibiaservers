import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-54-non-pvp-server');
}

export default function Tibijka854NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-54-non-pvp-server" />;
}
