import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-website');
}

export default function BestNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-website" />;
}
