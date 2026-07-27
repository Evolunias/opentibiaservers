import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-ot');
}

export default function LowrateOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-ot" />;
}
