import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-client');
}

export default function NewSeasonDemolidoresClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-client" />;
}
