import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-website');
}

export default function WithDiscordDemolidoresWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-website" />;
}
