import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-north-america');
}

export default function ShadowcoresWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-north-america" />;
}
