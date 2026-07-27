import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-ots');
}

export default function NewSeasonOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-ots" />;
}
