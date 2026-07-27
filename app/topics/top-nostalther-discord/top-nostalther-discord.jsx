import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nostalther-discord');
}

export default function TopNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-nostalther-discord" />;
}
