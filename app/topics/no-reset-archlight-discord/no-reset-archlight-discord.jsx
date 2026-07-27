import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-discord');
}

export default function NoResetArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-discord" />;
}
