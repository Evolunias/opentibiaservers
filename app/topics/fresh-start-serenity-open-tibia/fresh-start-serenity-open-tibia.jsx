import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-open-tibia');
}

export default function FreshStartSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-open-tibia" />;
}
