import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-login');
}

export default function NewSeasonYurotsLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-login" />;
}
