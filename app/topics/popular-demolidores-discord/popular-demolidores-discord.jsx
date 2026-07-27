import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-discord');
}

export default function PopularDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-discord" />;
}
