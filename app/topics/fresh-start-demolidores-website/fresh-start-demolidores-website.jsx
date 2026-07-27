import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-website');
}

export default function FreshStartDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-website" />;
}
