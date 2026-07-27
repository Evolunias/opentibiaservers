import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-website');
}

export default function WithDiscordNoxiousotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-website" />;
}
