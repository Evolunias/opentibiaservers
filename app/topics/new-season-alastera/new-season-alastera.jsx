import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera');
}

export default function NewSeasonAlasteraKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera" />;
}
