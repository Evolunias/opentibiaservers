import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-open-tibia');
}

export default function CurrentSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-open-tibia" />;
}
