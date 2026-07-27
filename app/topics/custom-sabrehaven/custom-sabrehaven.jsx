import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven');
}

export default function CustomSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven" />;
}
