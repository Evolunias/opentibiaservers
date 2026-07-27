import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-ot-server');
}

export default function NewSeasonRealestaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-ot-server" />;
}
