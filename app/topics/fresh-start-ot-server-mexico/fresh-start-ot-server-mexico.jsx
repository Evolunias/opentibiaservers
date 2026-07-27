import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-mexico');
}

export default function FreshStartOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-mexico" />;
}
