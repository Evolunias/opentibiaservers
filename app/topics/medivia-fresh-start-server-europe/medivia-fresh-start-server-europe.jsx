import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-europe');
}

export default function MediviaFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-europe" />;
}
