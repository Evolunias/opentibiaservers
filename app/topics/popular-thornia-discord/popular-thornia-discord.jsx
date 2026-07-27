import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-discord');
}

export default function PopularThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-discord" />;
}
