import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-kasteria-server');
}

export default function LowExpKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-kasteria-server" />;
}
