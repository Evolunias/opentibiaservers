import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-discord');
}

export default function ArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="archlight-discord" />;
}
