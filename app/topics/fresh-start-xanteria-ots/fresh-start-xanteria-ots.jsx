import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-ots');
}

export default function FreshStartXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-ots" />;
}
