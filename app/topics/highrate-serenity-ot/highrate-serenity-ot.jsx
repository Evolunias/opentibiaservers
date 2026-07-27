import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-ot');
}

export default function HighrateSerenityOtKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-ot" />;
}
