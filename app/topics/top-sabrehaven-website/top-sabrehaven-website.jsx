import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-website');
}

export default function TopSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-website" />;
}
