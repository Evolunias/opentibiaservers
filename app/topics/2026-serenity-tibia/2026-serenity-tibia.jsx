import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('2026-serenity-tibia');
}

export default function Keyword2026SerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="2026-serenity-tibia" />;
}
