import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-rubinot-discord');
}

export default function PopularRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-rubinot-discord" />;
}
