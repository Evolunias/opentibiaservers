import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-discord');
}

export default function PopularTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-discord" />;
}
