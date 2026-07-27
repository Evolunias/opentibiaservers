import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaorigins-discord');
}

export default function NewSeasonTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaorigins-discord" />;
}
