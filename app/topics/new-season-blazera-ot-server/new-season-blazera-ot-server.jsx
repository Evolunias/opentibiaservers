import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-ot-server');
}

export default function NewSeasonBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-ot-server" />;
}
