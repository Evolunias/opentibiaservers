import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-ot');
}

export default function NewSeasonDemolidoresOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-ot" />;
}
