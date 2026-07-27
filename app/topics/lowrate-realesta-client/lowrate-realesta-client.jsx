import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-client');
}

export default function LowrateRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-client" />;
}
