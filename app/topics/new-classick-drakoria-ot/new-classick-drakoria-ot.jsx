import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-ot');
}

export default function NewClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-ot" />;
}
