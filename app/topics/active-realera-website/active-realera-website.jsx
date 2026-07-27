import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-realera-website');
}

export default function ActiveRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-realera-website" />;
}
