import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-high-exp-server-brazil');
}

export default function BlazeraHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="blazera-high-exp-server-brazil" />;
}
