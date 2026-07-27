import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-shadowcores-discord');
}

export default function CustomShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-shadowcores-discord" />;
}
