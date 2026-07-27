import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia');
}

export default function PopularOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia" />;
}
