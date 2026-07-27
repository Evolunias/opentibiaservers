import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-discord');
}

export default function LowrateArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-discord" />;
}
