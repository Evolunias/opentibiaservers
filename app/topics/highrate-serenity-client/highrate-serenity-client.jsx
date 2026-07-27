import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-client');
}

export default function HighrateSerenityClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-client" />;
}
