import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-guilds');
}

export default function ShadowcoresGuildsKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-guilds" />;
}
