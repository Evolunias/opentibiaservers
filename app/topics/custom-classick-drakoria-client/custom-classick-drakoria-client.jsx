import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-client');
}

export default function CustomClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-client" />;
}
