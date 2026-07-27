import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-tibia');
}

export default function PopularSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-tibia" />;
}
