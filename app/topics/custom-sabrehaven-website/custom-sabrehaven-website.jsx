import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-website');
}

export default function CustomSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-website" />;
}
