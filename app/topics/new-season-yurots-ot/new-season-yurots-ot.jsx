import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-ot');
}

export default function NewSeasonYurotsOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-ot" />;
}
