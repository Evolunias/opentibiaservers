import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot');
}

export default function WithDiscordCarlinotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot" />;
}
