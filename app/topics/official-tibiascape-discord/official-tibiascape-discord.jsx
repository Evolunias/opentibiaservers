import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-discord');
}

export default function OfficialTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-discord" />;
}
