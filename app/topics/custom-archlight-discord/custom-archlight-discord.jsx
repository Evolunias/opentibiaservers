import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-discord');
}

export default function CustomArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-discord" />;
}
