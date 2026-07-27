import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-client');
}

export default function TopSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-client" />;
}
