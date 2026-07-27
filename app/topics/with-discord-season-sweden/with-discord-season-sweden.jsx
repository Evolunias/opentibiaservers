import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-season-sweden');
}

export default function WithDiscordSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-season-sweden" />;
}
