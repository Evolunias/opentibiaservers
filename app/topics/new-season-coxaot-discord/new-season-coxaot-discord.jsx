import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-coxaot-discord');
}

export default function NewSeasonCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-coxaot-discord" />;
}
