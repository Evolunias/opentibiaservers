import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-north-america');
}

export default function WithDiscordClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-north-america" />;
}
