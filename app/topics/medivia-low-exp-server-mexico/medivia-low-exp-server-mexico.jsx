import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-mexico');
}

export default function MediviaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-mexico" />;
}
