import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-website');
}

export default function WithDiscordSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-website" />;
}
