import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-server');
}

export default function NewSeasonRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-server" />;
}
