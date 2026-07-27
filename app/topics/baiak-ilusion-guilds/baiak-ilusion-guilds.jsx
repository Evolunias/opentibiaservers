import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-guilds');
}

export default function BaiakIlusionGuildsKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-guilds" />;
}
