import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-login');
}

export default function NewSeasonOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-login" />;
}
