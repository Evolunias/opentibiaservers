import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-tibia');
}

export default function BestSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-tibia" />;
}
