import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-login');
}

export default function WithDiscordCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-login" />;
}
