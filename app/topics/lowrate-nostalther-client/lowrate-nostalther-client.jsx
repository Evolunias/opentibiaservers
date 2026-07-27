import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-client');
}

export default function LowrateNostaltherClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-client" />;
}
