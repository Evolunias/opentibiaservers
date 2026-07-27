import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-private-server');
}

export default function HighrateSerenityPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-private-server" />;
}
