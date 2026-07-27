import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-open-tibia');
}

export default function LowrateSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-open-tibia" />;
}
