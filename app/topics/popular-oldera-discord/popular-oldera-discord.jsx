import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oldera-discord');
}

export default function PopularOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-oldera-discord" />;
}
