import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-guide');
}

export default function NewSeasonSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-guide" />;
}
