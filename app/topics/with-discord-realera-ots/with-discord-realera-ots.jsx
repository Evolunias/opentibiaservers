import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-ots');
}

export default function WithDiscordRealeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-ots" />;
}
