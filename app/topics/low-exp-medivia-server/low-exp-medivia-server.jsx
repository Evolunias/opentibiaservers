import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-medivia-server');
}

export default function LowExpMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-medivia-server" />;
}
