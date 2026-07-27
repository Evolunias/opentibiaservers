import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-alastera-server');
}

export default function CustomAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-alastera-server" />;
}
