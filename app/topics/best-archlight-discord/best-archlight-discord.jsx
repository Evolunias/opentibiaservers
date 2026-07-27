import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-discord');
}

export default function BestArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-discord" />;
}
