import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-open-tibia');
}

export default function PopularOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-open-tibia" />;
}
