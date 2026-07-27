import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-sabrehaven-website');
}

export default function BestSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-sabrehaven-website" />;
}
