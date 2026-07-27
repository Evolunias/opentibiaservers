import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-4-with-discord-server');
}

export default function CalmeraOt84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-4-with-discord-server" />;
}
