import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-ot');
}

export default function NewSeasonEvoleraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-ot" />;
}
