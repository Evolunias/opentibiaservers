import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-discord');
}

export default function OfficialShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-discord" />;
}
