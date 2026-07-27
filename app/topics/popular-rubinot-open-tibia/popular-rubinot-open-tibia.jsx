import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-open-tibia');
}

export default function PopularRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-open-tibia" />;
}
