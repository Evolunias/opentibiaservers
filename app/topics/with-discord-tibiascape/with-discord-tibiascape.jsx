import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape');
}

export default function WithDiscordTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape" />;
}
