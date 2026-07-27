import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-website');
}

export default function PopularSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-website" />;
}
