import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-login');
}

export default function HighrateSerenityLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-login" />;
}
