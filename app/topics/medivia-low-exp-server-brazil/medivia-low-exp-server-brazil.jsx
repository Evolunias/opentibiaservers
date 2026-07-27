import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-brazil');
}

export default function MediviaLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-brazil" />;
}
