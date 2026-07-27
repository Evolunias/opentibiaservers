import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-website');
}

export default function NilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="nilot-website" />;
}
