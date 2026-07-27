import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-discord');
}

export default function PopularClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-discord" />;
}
