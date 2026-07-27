import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-discord');
}

export default function TopRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-discord" />;
}
