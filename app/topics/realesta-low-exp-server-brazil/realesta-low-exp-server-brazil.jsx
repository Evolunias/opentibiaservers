import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-brazil');
}

export default function RealestaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-brazil" />;
}
