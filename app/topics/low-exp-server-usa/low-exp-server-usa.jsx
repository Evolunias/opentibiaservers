import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-usa');
}

export default function LowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-usa" />;
}
