import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-open-tibia');
}

export default function HighrateSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-open-tibia" />;
}
