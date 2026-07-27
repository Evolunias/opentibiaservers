import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-argentina');
}

export default function UnlineHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-argentina" />;
}
