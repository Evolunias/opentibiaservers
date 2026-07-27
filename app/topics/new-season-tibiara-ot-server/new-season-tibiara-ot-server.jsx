import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-ot-server');
}

export default function NewSeasonTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-ot-server" />;
}
