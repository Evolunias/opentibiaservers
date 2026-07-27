import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-login');
}

export default function NewSeasonClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-login" />;
}
