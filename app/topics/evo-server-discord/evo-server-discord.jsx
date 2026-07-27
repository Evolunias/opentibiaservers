import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-discord');
}

export default function EvoServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="evo-server-discord" />;
}
