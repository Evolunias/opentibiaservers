import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-official');
}

export default function HighrateSerenityOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-official" />;
}
