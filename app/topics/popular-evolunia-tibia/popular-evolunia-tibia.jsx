import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-tibia');
}

export default function PopularEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-tibia" />;
}
