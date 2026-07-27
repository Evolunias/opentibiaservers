import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-website');
}

export default function WithDiscordMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-website" />;
}
