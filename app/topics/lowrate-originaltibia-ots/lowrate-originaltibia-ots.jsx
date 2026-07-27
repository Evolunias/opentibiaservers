import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-ots');
}

export default function LowrateOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-ots" />;
}
