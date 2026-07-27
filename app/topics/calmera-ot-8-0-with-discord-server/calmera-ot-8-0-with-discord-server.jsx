import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-0-with-discord-server');
}

export default function CalmeraOt80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-0-with-discord-server" />;
}
