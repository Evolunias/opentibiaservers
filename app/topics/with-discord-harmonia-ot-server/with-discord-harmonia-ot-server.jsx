import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-server');
}

export default function WithDiscordHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-server" />;
}
