import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-argentina');
}

export default function ShadowcoresWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-argentina" />;
}
