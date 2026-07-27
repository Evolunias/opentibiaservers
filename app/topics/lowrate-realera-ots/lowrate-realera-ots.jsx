import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-ots');
}

export default function LowrateRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-ots" />;
}
