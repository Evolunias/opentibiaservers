import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-guide');
}

export default function OfficialSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-guide" />;
}
