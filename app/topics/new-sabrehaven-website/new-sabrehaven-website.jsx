import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-sabrehaven-website');
}

export default function NewSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-sabrehaven-website" />;
}
