import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-ots');
}

export default function TopXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-ots" />;
}
