import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-client');
}

export default function BestSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-client" />;
}
