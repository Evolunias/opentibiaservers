import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-classick-drakoria-ot-server');
}

export default function FreshStartClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-classick-drakoria-ot-server" />;
}
