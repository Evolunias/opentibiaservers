import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-discord');
}

export default function OfficialRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-discord" />;
}
