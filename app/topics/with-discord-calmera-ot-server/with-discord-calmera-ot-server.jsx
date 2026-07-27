import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-server');
}

export default function WithDiscordCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-server" />;
}
