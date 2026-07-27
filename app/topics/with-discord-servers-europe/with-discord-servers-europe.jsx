import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-servers-europe');
}

export default function WithDiscordServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-servers-europe" />;
}
