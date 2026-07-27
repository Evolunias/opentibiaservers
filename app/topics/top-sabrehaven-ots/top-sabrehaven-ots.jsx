import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-ots');
}

export default function TopSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-ots" />;
}
