import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-login');
}

export default function NewSeasonDemolidoresLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-login" />;
}
