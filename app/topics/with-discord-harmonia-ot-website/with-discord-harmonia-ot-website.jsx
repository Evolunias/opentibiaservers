import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-website');
}

export default function WithDiscordHarmoniaOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-website" />;
}
