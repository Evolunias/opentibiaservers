import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-poland');
}

export default function HarmoniaOtWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-poland" />;
}
