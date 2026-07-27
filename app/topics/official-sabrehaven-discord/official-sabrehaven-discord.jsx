import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-discord');
}

export default function OfficialSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-discord" />;
}
