import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-tibia');
}

export default function TopSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-tibia" />;
}
