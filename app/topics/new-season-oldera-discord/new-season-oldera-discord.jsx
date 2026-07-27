import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-discord');
}

export default function NewSeasonOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-discord" />;
}
