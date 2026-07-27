import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-alastera-ot-server');
}

export default function TopAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-alastera-ot-server" />;
}
