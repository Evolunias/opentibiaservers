import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-website');
}

export default function HighrateSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-website" />;
}
