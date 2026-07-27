import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis');
}

export default function WithDiscordTibiantisKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis" />;
}
