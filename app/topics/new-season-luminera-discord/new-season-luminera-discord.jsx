import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-luminera-discord');
}

export default function NewSeasonLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-luminera-discord" />;
}
