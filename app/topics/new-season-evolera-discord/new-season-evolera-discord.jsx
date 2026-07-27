import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolera-discord');
}

export default function NewSeasonEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolera-discord" />;
}
