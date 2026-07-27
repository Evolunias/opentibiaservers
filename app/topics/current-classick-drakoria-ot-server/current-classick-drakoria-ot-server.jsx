import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-ot-server');
}

export default function CurrentClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-ot-server" />;
}
