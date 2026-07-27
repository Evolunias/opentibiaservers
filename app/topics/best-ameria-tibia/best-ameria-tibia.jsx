import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-tibia');
}

export default function BestAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-tibia" />;
}
