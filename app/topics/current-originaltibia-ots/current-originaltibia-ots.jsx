import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-ots');
}

export default function CurrentOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-ots" />;
}
