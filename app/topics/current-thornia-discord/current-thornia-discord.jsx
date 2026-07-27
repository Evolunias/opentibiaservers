import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-discord');
}

export default function CurrentThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-discord" />;
}
