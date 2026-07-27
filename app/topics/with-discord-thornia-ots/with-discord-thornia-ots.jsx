import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-ots');
}

export default function WithDiscordThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-ots" />;
}
