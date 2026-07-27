import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-germany');
}

export default function ShadowcoresWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-germany" />;
}
