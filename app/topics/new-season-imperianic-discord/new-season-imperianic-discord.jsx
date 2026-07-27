import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-imperianic-discord');
}

export default function NewSeasonImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-imperianic-discord" />;
}
