import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-discord');
}

export default function OfficialCarlinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-discord" />;
}
