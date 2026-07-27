import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-8-1-with-discord-server');
}

export default function CalmeraOt81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-8-1-with-discord-server" />;
}
