import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-website');
}

export default function SabrehavenWebsiteKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-website" />;
}
