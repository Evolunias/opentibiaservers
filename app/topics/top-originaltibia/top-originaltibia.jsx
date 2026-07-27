import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia');
}

export default function TopOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia" />;
}
