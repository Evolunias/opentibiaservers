import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-open-tibia');
}

export default function NewSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-open-tibia" />;
}
