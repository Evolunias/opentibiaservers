import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-discord');
}

export default function OfficialTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-discord" />;
}
