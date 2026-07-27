import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-official');
}

export default function WithDiscordHarmoniaOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-official" />;
}
