import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-discord');
}

export default function PopularImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-discord" />;
}
