import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-uk');
}

export default function MediviaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-uk" />;
}
