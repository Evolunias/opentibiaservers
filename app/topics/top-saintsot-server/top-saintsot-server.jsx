import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-server');
}

export default function TopSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-server" />;
}
