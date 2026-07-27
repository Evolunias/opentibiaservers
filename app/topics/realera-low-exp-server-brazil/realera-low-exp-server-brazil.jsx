import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-brazil');
}

export default function RealeraLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-brazil" />;
}
