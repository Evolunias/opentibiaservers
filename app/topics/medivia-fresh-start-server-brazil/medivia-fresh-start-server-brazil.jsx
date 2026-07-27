import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-brazil');
}

export default function MediviaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-brazil" />;
}
