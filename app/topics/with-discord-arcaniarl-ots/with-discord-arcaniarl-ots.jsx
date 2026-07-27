import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-ots');
}

export default function WithDiscordArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-ots" />;
}
