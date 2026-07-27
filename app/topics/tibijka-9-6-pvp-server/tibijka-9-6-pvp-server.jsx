import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-pvp-server');
}

export default function Tibijka96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-pvp-server" />;
}
