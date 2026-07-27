import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-discord');
}

export default function NewSeasonTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-discord" />;
}
