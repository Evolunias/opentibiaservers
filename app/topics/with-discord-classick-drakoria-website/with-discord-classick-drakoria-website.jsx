import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-website');
}

export default function WithDiscordClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-website" />;
}
