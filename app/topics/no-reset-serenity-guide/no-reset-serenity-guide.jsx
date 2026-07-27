import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-serenity-guide');
}

export default function NoResetSerenityGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-serenity-guide" />;
}
