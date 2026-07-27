import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-discord');
}

export default function OfficialZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-discord" />;
}
