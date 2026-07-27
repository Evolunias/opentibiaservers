import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-ot-server');
}

export default function FreshStartXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-ot-server" />;
}
