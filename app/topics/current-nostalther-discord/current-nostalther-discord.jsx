import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nostalther-discord');
}

export default function CurrentNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-nostalther-discord" />;
}
