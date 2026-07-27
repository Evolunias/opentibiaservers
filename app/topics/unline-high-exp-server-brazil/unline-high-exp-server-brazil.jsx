import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-high-exp-server-brazil');
}

export default function UnlineHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-high-exp-server-brazil" />;
}
