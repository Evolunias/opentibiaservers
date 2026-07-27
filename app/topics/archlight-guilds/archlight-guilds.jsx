import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-guilds');
}

export default function ArchlightGuildsKeywordPage() {
  return <StaticKeywordPage slug="archlight-guilds" />;
}
