import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-ots');
}

export default function NewSeasonAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-ots" />;
}
