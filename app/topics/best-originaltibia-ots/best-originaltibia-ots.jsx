import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-originaltibia-ots');
}

export default function BestOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-originaltibia-ots" />;
}
