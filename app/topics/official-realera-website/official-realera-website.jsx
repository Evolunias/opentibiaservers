import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realera-website');
}

export default function OfficialRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-realera-website" />;
}
