import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-ot');
}

export default function ActiveSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-ot" />;
}
