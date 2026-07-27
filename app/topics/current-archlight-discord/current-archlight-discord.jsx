import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-discord');
}

export default function CurrentArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-discord" />;
}
