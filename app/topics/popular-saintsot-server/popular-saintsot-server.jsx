import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-server');
}

export default function PopularSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-server" />;
}
