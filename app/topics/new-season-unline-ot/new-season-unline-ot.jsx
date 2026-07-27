import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-ot');
}

export default function NewSeasonUnlineOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-ot" />;
}
