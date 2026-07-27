import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nostalther-discord');
}

export default function PopularNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-nostalther-discord" />;
}
