import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-shadowcores-discord');
}

export default function ActiveShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-shadowcores-discord" />;
}
