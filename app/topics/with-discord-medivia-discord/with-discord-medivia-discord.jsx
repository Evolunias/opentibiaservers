import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-discord');
}

export default function WithDiscordMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-discord" />;
}
