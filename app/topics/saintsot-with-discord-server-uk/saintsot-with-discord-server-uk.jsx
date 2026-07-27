import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-discord-server-uk');
}

export default function SaintsotWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-discord-server-uk" />;
}
