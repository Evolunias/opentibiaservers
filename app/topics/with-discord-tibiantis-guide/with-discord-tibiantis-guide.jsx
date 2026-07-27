import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-guide');
}

export default function WithDiscordTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-guide" />;
}
