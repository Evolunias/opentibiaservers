import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-tibia');
}

export default function CurrentSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-tibia" />;
}
