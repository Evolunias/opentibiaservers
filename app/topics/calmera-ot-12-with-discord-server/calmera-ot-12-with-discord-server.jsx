import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-12-with-discord-server');
}

export default function CalmeraOt12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-12-with-discord-server" />;
}
