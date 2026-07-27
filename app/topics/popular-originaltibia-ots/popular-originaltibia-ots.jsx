import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-ots');
}

export default function PopularOriginaltibiaOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-ots" />;
}
