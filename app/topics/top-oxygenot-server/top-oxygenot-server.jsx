import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oxygenot-server');
}

export default function TopOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="top-oxygenot-server" />;
}
