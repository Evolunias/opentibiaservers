import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-ots');
}

export default function LowrateNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-ots" />;
}
