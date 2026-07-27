import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-alastera-discord');
}

export default function NewSeasonAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-alastera-discord" />;
}
