import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-ot-server');
}

export default function WithDiscordAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-ot-server" />;
}
