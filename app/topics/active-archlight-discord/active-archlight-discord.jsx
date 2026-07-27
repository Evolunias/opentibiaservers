import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-discord');
}

export default function ActiveArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-discord" />;
}
