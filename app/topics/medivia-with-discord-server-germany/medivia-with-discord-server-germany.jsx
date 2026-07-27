import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-discord-server-germany');
}

export default function MediviaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-discord-server-germany" />;
}
