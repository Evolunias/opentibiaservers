import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-ot');
}

export default function PopularOriginaltibiaOtKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-ot" />;
}
