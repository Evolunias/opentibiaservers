import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-ots');
}

export default function WithDiscordTibiascapeOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-ots" />;
}
