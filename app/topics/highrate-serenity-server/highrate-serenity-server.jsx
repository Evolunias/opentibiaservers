import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-server');
}

export default function HighrateSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-server" />;
}
