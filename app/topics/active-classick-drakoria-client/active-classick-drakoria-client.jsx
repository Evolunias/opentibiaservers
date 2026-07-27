import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-classick-drakoria-client');
}

export default function ActiveClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="active-classick-drakoria-client" />;
}
