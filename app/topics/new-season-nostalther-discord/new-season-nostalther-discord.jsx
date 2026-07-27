import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-discord');
}

export default function NewSeasonNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-discord" />;
}
