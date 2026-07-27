import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-servers-usa');
}

export default function LowExpServersUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-servers-usa" />;
}
