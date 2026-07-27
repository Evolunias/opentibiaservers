import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-website');
}

export default function WithDiscordCyntaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-website" />;
}
