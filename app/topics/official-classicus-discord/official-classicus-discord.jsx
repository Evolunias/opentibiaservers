import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classicus-discord');
}

export default function OfficialClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-classicus-discord" />;
}
