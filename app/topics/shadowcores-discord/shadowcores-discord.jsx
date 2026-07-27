import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-discord');
}

export default function ShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-discord" />;
}
