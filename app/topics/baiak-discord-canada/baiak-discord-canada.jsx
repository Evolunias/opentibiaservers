import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-canada');
}

export default function BaiakDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-canada" />;
}
