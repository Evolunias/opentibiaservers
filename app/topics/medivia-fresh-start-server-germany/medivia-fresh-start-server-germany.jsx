import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-germany');
}

export default function MediviaFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-germany" />;
}
