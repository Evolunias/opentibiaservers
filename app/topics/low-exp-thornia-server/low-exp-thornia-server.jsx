import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-thornia-server');
}

export default function LowExpThorniaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-thornia-server" />;
}
