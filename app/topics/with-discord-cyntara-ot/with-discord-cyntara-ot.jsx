import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-ot');
}

export default function WithDiscordCyntaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-ot" />;
}
