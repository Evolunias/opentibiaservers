import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-login');
}

export default function LowrateNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-login" />;
}
