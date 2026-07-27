import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-argentina');
}

export default function BaiakDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-argentina" />;
}
