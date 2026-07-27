import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-discord-europe');
}

export default function BaiakDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-discord-europe" />;
}
