import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-discord');
}

export default function OfficialNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-discord" />;
}
