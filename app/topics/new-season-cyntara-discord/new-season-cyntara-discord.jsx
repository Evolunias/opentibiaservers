import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-cyntara-discord');
}

export default function NewSeasonCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-cyntara-discord" />;
}
