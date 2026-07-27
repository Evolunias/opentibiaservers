import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-discord');
}

export default function PopularArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-discord" />;
}
