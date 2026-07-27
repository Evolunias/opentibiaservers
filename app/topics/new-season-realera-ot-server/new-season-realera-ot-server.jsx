import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-ot-server');
}

export default function NewSeasonRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-ot-server" />;
}
