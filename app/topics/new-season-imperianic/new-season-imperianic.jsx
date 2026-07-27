import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic');
}

export default function NewSeasonImperianicKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic" />;
}
