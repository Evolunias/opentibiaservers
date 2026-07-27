import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-with-discord-server-sweden');
}

export default function HarmoniaOtWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-with-discord-server-sweden" />;
}
