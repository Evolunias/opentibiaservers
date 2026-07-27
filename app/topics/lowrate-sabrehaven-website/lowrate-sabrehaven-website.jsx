import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-website');
}

export default function LowrateSabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-website" />;
}
