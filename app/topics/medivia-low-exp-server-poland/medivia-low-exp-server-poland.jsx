import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-poland');
}

export default function MediviaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-poland" />;
}
