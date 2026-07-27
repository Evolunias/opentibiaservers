import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-baiak-server-latin-america');
}

export default function SaintsotBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-baiak-server-latin-america" />;
}
