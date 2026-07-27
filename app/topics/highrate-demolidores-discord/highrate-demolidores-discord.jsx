import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-demolidores-discord');
}

export default function HighrateDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-demolidores-discord" />;
}
