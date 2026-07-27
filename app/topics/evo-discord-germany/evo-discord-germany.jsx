import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-discord-germany');
}

export default function EvoDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-discord-germany" />;
}
