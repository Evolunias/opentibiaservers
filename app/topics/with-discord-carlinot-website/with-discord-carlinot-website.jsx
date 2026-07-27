import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-website');
}

export default function WithDiscordCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-website" />;
}
