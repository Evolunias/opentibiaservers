import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-sabrehaven-discord');
}

export default function NewSeasonSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-sabrehaven-discord" />;
}
