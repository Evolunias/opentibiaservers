import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-online');
}

export default function NewSeasonEvoluniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-online" />;
}
