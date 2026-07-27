import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-shadowcores-discord');
}

export default function BestShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-shadowcores-discord" />;
}
