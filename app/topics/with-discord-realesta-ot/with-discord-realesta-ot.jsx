import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-ot');
}

export default function WithDiscordRealestaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-ot" />;
}
