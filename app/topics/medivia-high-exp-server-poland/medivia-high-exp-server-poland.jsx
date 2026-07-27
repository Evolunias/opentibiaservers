import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-poland');
}

export default function MediviaHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-poland" />;
}
