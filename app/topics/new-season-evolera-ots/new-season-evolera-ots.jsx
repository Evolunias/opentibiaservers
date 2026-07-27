import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-ots');
}

export default function NewSeasonEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-ots" />;
}
