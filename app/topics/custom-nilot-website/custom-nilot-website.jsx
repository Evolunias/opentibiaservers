import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-website');
}

export default function CustomNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-website" />;
}
