import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-11-with-discord-server');
}

export default function CalmeraOt11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-11-with-discord-server" />;
}
