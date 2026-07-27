import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-website');
}

export default function DemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="demolidores-website" />;
}
