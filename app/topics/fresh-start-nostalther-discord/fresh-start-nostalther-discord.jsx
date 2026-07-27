import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nostalther-discord');
}

export default function FreshStartNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nostalther-discord" />;
}
