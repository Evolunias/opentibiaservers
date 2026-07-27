import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-ot');
}

export default function NewSeasonOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-ot" />;
}
