import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-login');
}

export default function TopSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-login" />;
}
