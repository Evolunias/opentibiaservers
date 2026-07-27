import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-serenity-open-tibia');
}

export default function NewSeasonSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-serenity-open-tibia" />;
}
