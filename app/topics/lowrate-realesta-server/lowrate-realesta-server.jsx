import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-server');
}

export default function LowrateRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-server" />;
}
