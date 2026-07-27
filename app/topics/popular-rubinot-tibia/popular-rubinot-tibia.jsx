import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-tibia');
}

export default function PopularRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-tibia" />;
}
