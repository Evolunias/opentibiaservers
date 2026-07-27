import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-tibia');
}

export default function PopularThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-tibia" />;
}
