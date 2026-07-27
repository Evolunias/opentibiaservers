import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-with-discord-server-sweden');
}

export default function SaintsotWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="saintsot-with-discord-server-sweden" />;
}
