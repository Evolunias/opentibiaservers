import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-discord');
}

export default function NewSeasonDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-discord" />;
}
