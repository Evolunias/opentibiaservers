import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-eldera-server');
}

export default function LowExpElderaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-eldera-server" />;
}
