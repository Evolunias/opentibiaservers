import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots');
}

export default function NewSeasonYurotsKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots" />;
}
