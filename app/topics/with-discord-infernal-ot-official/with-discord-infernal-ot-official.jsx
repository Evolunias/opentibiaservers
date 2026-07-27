import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-infernal-ot-official');
}

export default function WithDiscordInfernalOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-infernal-ot-official" />;
}
