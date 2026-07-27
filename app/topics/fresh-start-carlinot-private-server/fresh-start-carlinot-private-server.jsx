import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-private-server');
}

export default function FreshStartCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-private-server" />;
}
