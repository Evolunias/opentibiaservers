import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-website');
}

export default function ActiveNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-website" />;
}
