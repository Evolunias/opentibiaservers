import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-poland');
}

export default function MediviaFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-poland" />;
}
