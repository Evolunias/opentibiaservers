import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-tibia');
}

export default function LowrateSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-tibia" />;
}
