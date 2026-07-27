import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-open-tibia');
}

export default function CustomSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-open-tibia" />;
}
