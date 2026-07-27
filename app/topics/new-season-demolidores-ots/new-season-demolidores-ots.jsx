import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-ots');
}

export default function NewSeasonDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-ots" />;
}
