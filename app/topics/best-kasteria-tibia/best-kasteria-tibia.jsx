import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-tibia');
}

export default function BestKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-tibia" />;
}
