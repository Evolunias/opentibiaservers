import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-login');
}

export default function BestSaintsotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-login" />;
}
