import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-medivia-discord');
}

export default function OfficialMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-medivia-discord" />;
}
