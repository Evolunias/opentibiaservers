import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-tibia');
}

export default function SerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="serenity-tibia" />;
}
