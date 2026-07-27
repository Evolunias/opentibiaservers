import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-website');
}

export default function WithDiscordTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-website" />;
}
