import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-discord');
}

export default function OfficialMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-discord" />;
}
