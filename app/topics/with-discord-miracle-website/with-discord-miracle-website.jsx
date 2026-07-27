import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-website');
}

export default function WithDiscordMiracleWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-website" />;
}
