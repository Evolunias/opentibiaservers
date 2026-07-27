import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-discord');
}

export default function TopArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-discord" />;
}
