import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-sabrehaven-ots');
}

export default function CustomSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-sabrehaven-ots" />;
}
