import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-website');
}

export default function HighrateAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-website" />;
}
