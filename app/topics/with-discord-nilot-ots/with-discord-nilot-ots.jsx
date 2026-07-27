import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nilot-ots');
}

export default function WithDiscordNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nilot-ots" />;
}
