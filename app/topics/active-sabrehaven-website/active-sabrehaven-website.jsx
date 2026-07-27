import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-website');
}

export default function ActiveSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-website" />;
}
