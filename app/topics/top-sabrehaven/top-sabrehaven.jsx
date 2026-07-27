import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven');
}

export default function TopSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven" />;
}
