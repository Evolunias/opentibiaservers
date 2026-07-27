import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-realesta-server');
}

export default function LowExpRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-realesta-server" />;
}
