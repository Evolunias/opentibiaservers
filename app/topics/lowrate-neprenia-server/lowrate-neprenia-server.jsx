import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-server');
}

export default function LowrateNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-server" />;
}
