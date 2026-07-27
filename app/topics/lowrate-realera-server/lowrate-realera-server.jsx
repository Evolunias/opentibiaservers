import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-server');
}

export default function LowrateRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-server" />;
}
