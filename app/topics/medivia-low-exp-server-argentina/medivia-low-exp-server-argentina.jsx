import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-argentina');
}

export default function MediviaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-argentina" />;
}
