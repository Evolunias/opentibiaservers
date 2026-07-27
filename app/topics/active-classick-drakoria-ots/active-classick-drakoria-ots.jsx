import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-ots');
}

export default function ActiveClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-ots" />;
}
