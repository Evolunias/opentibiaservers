import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-discord');
}

export default function NewSeasonNoxiousotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-discord" />;
}
