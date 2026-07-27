import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven');
}

export default function PopularSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven" />;
}
