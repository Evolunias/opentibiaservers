import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-open-tibia');
}

export default function PopularNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-open-tibia" />;
}
