import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-usa');
}

export default function MediviaHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-usa" />;
}
