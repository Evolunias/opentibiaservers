import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-discord-server-france');
}

export default function ShadowcoresWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-discord-server-france" />;
}
