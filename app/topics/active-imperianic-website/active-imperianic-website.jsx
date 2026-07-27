import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-imperianic-website');
}

export default function ActiveImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-imperianic-website" />;
}
