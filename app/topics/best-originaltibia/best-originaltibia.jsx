import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia');
}

export default function BestOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia" />;
}
