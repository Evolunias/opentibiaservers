import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-europe');
}

export default function ShadowcoresWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-europe" />;
}
