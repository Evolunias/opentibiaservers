import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classick-drakoria-client');
}

export default function NewClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-classick-drakoria-client" />;
}
