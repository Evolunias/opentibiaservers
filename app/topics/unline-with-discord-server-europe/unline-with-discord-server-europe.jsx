import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-discord-server-europe');
}

export default function UnlineWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-with-discord-server-europe" />;
}
