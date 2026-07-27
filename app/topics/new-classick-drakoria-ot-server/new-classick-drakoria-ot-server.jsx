import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-ot-server');
}

export default function NewClassickDrakoriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-ot-server" />;
}
