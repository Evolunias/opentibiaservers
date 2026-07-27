import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-discord');
}

export default function CanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="canob-discord" />;
}
