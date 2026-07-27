import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-usa');
}

export default function MediviaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-usa" />;
}
