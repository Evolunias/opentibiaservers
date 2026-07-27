import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-ots');
}

export default function WithDiscordOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-ots" />;
}
