import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-discord');
}

export default function PopularThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-discord" />;
}
