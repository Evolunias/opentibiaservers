import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-ot-server');
}

export default function AlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-ot-server" />;
}
