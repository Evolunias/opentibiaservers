import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-ots');
}

export default function HighrateSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-ots" />;
}
