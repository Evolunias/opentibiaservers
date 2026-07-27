import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia');
}

export default function WithDiscordOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia" />;
}
