import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-tibia');
}

export default function PopularEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-tibia" />;
}
