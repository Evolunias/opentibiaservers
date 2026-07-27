import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia');
}

export default function CurrentOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia" />;
}
