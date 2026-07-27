import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-website');
}

export default function PopularDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-website" />;
}
