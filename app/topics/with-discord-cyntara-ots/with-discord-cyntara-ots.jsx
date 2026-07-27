import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-ots');
}

export default function WithDiscordCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-ots" />;
}
