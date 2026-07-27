import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-low-exp-server-brazil');
}

export default function UnlineLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-low-exp-server-brazil" />;
}
