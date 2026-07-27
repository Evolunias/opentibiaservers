import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-serenity-open-tibia');
}

export default function PopularSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-serenity-open-tibia" />;
}
