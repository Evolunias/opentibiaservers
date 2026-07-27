import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-xanteria-ots');
}

export default function ActiveXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="active-xanteria-ots" />;
}
