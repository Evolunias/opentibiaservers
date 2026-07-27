import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-serenity-tibia');
}

export default function CustomSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-serenity-tibia" />;
}
