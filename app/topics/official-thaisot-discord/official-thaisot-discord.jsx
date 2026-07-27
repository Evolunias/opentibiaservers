import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-discord');
}

export default function OfficialThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-discord" />;
}
