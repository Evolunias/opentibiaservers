import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-official');
}

export default function NewSeasonDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-official" />;
}
