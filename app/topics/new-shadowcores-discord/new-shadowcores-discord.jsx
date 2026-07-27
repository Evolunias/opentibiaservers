import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-discord');
}

export default function NewShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-discord" />;
}
