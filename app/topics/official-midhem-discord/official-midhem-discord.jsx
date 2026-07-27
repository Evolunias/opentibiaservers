import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-midhem-discord');
}

export default function OfficialMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-midhem-discord" />;
}
