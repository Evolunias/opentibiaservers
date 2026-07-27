import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-open-tibia');
}

export default function BestSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-open-tibia" />;
}
