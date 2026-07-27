import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-guide');
}

export default function WithDiscordTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-guide" />;
}
