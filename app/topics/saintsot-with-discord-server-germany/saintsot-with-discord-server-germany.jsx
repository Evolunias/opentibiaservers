import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-discord-server-germany');
}

export default function SaintsotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-discord-server-germany" />;
}
