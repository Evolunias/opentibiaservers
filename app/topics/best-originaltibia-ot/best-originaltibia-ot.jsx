import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-ot');
}

export default function BestOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-ot" />;
}
