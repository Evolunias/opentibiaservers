import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-saintsot-login');
}

export default function PopularSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-saintsot-login" />;
}
