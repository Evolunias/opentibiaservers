import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-discord');
}

export default function CurrentDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-discord" />;
}
