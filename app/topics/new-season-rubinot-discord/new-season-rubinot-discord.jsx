import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-rubinot-discord');
}

export default function NewSeasonRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-rubinot-discord" />;
}
