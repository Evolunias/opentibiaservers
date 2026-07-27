import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-client');
}

export default function LowrateRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-client" />;
}
