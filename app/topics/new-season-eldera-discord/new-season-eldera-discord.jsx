import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-discord');
}

export default function NewSeasonElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-discord" />;
}
