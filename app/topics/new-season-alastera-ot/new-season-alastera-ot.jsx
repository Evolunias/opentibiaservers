import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-ot');
}

export default function NewSeasonAlasteraOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-ot" />;
}
