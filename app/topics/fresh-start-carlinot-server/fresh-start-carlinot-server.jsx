import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-server');
}

export default function FreshStartCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-server" />;
}
