import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-harmonia-ot-ots');
}

export default function WithDiscordHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-harmonia-ot-ots" />;
}
