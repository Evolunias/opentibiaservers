import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibianus-server');
}

export default function LowExpTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibianus-server" />;
}
