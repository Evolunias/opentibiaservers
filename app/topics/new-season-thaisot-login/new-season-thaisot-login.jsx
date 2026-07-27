import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-login');
}

export default function NewSeasonThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-login" />;
}
