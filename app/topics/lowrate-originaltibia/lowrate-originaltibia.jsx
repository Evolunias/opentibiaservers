import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia');
}

export default function LowrateOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia" />;
}
