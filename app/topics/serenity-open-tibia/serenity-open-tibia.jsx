import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-open-tibia');
}

export default function SerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="serenity-open-tibia" />;
}
