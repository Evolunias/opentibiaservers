import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-ots');
}

export default function NewSeasonYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-ots" />;
}
