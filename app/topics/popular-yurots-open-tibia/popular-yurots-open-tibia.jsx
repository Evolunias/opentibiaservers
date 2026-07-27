import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-open-tibia');
}

export default function PopularYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-open-tibia" />;
}
