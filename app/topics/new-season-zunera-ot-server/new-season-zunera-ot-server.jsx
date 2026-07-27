import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-zunera-ot-server');
}

export default function NewSeasonZuneraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-zunera-ot-server" />;
}
