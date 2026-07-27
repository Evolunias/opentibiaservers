import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-website');
}

export default function TopDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-website" />;
}
