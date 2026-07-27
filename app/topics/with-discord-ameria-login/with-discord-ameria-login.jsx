import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-login');
}

export default function WithDiscordAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-login" />;
}
