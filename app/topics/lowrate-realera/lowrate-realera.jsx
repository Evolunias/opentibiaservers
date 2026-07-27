import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera');
}

export default function LowrateRealeraKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera" />;
}
