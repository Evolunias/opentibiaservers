import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-ots');
}

export default function PopularSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-ots" />;
}
