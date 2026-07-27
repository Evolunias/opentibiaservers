import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-website');
}

export default function LowrateNilotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-website" />;
}
