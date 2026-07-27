import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-xanteria-ots');
}

export default function CustomXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-xanteria-ots" />;
}
