import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-open-tibia');
}

export default function PopularThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-open-tibia" />;
}
