import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-website');
}

export default function WithDiscordInfernalOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-website" />;
}
