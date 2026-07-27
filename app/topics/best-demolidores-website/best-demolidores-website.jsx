import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-website');
}

export default function BestDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-website" />;
}
