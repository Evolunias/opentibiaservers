import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-discord');
}

export default function WithDiscordAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-discord" />;
}
