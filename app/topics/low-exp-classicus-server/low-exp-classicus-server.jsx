import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-classicus-server');
}

export default function LowExpClassicusServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-classicus-server" />;
}
