import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-mexico');
}

export default function BaiakDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-mexico" />;
}
