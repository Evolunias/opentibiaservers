import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-client');
}

export default function LowrateNepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-client" />;
}
