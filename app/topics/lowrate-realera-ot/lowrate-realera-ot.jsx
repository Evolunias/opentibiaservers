import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-ot');
}

export default function LowrateRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-ot" />;
}
