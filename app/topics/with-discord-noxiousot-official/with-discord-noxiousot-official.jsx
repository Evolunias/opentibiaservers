import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-noxiousot-official');
}

export default function WithDiscordNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-noxiousot-official" />;
}
