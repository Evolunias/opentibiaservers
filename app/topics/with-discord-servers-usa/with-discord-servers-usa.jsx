import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-usa');
}

export default function WithDiscordServersUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-usa" />;
}
