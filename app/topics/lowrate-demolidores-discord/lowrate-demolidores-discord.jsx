import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-demolidores-discord');
}

export default function LowrateDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-demolidores-discord" />;
}
