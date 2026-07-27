import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-demolidores-website');
}

export default function OfficialDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-demolidores-website" />;
}
