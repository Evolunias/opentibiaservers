import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-tibia');
}

export default function PopularNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-tibia" />;
}
