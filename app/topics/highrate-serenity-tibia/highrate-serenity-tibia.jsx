import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-tibia');
}

export default function HighrateSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-tibia" />;
}
