import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-north-america');
}

export default function WithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-north-america" />;
}
