import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-ot');
}

export default function WithDiscordRealeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-ot" />;
}
