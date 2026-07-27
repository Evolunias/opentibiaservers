import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-register');
}

export default function HighrateSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-register" />;
}
