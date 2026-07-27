import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-luminera-server');
}

export default function LowExpLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-luminera-server" />;
}
