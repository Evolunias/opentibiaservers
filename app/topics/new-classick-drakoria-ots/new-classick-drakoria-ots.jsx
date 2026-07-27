import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-ots');
}

export default function NewClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-ots" />;
}
