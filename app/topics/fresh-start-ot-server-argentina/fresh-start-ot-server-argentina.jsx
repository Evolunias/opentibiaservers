import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-argentina');
}

export default function FreshStartOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-argentina" />;
}
