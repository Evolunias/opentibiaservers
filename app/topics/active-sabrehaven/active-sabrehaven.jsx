import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven');
}

export default function ActiveSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven" />;
}
