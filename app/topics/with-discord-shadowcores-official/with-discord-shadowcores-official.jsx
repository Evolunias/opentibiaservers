import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-official');
}

export default function WithDiscordShadowcoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-official" />;
}
