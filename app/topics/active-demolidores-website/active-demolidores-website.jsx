import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-website');
}

export default function ActiveDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-website" />;
}
