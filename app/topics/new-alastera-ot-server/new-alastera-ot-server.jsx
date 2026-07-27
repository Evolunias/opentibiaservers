import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-alastera-ot-server');
}

export default function NewAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-alastera-ot-server" />;
}
