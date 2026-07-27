import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-alastera-ot-server');
}

export default function FreshStartAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-alastera-ot-server" />;
}
