import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-open-tibia');
}

export default function TopSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-open-tibia" />;
}
