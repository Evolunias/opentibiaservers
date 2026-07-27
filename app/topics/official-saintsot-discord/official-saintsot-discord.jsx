import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-discord');
}

export default function OfficialSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-discord" />;
}
