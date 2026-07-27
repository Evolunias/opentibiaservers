import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot');
}

export default function WithDiscordRubinotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot" />;
}
