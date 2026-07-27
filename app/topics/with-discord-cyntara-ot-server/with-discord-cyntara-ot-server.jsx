import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-ot-server');
}

export default function WithDiscordCyntaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-ot-server" />;
}
