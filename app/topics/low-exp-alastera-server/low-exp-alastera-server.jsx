import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-alastera-server');
}

export default function LowExpAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-alastera-server" />;
}
