import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-non-pvp-server');
}

export default function Tibijka96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-non-pvp-server" />;
}
