import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thornia-discord');
}

export default function FreshStartThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thornia-discord" />;
}
