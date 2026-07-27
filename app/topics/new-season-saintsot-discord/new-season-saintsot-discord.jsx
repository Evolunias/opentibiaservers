import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-discord');
}

export default function NewSeasonSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-discord" />;
}
