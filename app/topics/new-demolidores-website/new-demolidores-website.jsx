import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-website');
}

export default function NewDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-website" />;
}
