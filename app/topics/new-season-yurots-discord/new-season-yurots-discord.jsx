import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-yurots-discord');
}

export default function NewSeasonYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-yurots-discord" />;
}
