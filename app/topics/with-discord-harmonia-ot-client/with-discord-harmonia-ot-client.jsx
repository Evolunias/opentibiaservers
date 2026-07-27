import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-client');
}

export default function WithDiscordHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-client" />;
}
