import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-discord');
}

export default function OfficialNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-discord" />;
}
