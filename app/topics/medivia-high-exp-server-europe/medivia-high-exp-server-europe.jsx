import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-europe');
}

export default function MediviaHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-europe" />;
}
