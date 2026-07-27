import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-saintsot-server');
}

export default function WithActivePlayersSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-saintsot-server" />;
}
