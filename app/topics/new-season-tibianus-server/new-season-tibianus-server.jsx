import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-server');
}

export default function NewSeasonTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-server" />;
}
