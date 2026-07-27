import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity');
}

export default function HighrateSerenityKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity" />;
}
