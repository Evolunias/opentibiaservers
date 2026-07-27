import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-website');
}

export default function HighrateClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-website" />;
}
