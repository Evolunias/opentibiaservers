import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-discord');
}

export default function BaiakServerDiscordKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-discord" />;
}
