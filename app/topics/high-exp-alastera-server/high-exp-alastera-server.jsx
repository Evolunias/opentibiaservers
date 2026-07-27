import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-alastera-server');
}

export default function HighExpAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-alastera-server" />;
}
