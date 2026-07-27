import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-uk');
}

export default function BaiakDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-uk" />;
}
