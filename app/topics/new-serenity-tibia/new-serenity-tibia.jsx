import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-tibia');
}

export default function NewSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-tibia" />;
}
