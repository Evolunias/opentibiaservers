import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-discord');
}

export default function OtServerListDiscordKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-discord" />;
}
