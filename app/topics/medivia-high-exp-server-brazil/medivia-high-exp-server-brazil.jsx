import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-brazil');
}

export default function MediviaHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-brazil" />;
}
