import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-discord');
}

export default function NewSeasonUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-discord" />;
}
