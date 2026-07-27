import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-ot');
}

export default function PopularSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-ot" />;
}
