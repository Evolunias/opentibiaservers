import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-discord-server-europe');
}

export default function DemolidoresWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-discord-server-europe" />;
}
