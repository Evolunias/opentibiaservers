import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-north-america');
}

export default function WithDiscordServerListNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-north-america" />;
}
