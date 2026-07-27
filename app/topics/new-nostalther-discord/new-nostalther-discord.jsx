import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nostalther-discord');
}

export default function NewNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-nostalther-discord" />;
}
