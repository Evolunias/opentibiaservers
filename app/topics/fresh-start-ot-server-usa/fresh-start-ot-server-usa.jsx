import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-usa');
}

export default function FreshStartOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-usa" />;
}
