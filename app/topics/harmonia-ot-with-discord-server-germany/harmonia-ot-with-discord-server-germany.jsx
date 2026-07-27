import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-germany');
}

export default function HarmoniaOtWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-germany" />;
}
