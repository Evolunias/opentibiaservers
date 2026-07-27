import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-website');
}

export default function WithDiscordEvoluniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-website" />;
}
