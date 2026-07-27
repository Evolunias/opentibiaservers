import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-usa');
}

export default function UnlineHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-usa" />;
}
