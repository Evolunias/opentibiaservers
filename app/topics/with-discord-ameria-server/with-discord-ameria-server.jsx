import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-server');
}

export default function WithDiscordAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-server" />;
}
