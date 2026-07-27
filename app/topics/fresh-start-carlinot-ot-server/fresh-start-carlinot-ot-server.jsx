import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-ot-server');
}

export default function FreshStartCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-ot-server" />;
}
