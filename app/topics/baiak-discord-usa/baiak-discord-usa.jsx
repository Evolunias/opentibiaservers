import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-usa');
}

export default function BaiakDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-usa" />;
}
