import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-server');
}

export default function NewSeasonDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-server" />;
}
