import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-client');
}

export default function WithDiscordAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-client" />;
}
