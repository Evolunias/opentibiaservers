import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-discord');
}

export default function FreshStartArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-discord" />;
}
