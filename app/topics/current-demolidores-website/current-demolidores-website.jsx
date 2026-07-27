import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-website');
}

export default function CurrentDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-website" />;
}
