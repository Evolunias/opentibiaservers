import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus');
}

export default function NewSeasonClassicusKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus" />;
}
