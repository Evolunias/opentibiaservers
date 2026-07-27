import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-uk');
}

export default function MediviaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-uk" />;
}
