import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-discord');
}

export default function OfficialNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-discord" />;
}
