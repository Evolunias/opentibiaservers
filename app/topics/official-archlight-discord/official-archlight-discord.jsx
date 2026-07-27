import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-discord');
}

export default function OfficialArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-discord" />;
}
