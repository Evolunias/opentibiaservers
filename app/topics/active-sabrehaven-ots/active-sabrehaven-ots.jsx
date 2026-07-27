import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-sabrehaven-ots');
}

export default function ActiveSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="active-sabrehaven-ots" />;
}
