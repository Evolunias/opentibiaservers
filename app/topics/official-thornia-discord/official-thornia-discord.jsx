import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-discord');
}

export default function OfficialThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-discord" />;
}
