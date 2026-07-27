import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-ot');
}

export default function TopSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-ot" />;
}
