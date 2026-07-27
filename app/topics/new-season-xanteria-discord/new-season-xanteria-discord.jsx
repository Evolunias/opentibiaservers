import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-xanteria-discord');
}

export default function NewSeasonXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-xanteria-discord" />;
}
