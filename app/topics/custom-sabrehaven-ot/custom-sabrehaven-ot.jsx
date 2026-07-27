import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-ot');
}

export default function CustomSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-ot" />;
}
