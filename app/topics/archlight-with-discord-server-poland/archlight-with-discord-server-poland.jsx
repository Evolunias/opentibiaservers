import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-discord-server-poland');
}

export default function ArchlightWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-discord-server-poland" />;
}
