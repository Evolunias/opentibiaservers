import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-open-tibia');
}

export default function WithDiscordHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-open-tibia" />;
}
