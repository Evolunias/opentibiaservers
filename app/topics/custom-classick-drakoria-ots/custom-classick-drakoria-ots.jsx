import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-ots');
}

export default function CustomClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-ots" />;
}
