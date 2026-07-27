import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-website');
}

export default function NewSeasonDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-website" />;
}
