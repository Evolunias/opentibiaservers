import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-realera-server');
}

export default function LowExpRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-realera-server" />;
}
