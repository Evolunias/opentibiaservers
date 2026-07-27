import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-yurots-discord');
}

export default function PopularYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-yurots-discord" />;
}
