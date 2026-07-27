import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-sabrehaven-website');
}

export default function CurrentSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-sabrehaven-website" />;
}
