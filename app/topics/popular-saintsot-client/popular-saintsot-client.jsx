import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-client');
}

export default function PopularSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-client" />;
}
