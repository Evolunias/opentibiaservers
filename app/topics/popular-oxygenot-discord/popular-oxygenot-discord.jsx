import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-discord');
}

export default function PopularOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-discord" />;
}
