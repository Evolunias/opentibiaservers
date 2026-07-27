import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-discord');
}

export default function NewCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-canob-discord" />;
}
