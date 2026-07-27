import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-open-tibia');
}

export default function BestAmeriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-open-tibia" />;
}
