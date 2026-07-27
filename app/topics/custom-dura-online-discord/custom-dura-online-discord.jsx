import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-dura-online-discord');
}

export default function CustomDuraOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-dura-online-discord" />;
}
