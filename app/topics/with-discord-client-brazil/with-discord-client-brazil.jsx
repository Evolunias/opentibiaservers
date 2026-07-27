import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-brazil');
}

export default function WithDiscordClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-brazil" />;
}
