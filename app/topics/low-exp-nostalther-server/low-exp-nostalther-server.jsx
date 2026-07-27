import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-nostalther-server');
}

export default function LowExpNostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-nostalther-server" />;
}
