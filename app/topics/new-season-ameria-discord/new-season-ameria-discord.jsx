import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-discord');
}

export default function NewSeasonAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-discord" />;
}
