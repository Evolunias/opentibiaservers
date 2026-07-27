import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-website');
}

export default function FreshStartSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-website" />;
}
