import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-website');
}

export default function CustomDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-website" />;
}
