import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-ot');
}

export default function LowrateNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-ot" />;
}
