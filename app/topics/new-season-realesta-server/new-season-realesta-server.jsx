import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-server');
}

export default function NewSeasonRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-server" />;
}
