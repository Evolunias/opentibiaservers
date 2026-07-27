import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-discord');
}

export default function ElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="eldera-discord" />;
}
