import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-ot');
}

export default function CurrentOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-ot" />;
}
