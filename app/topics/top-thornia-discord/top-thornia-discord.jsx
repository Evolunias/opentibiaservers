import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-discord');
}

export default function TopThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-discord" />;
}
