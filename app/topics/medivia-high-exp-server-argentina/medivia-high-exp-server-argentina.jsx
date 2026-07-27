import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-high-exp-server-argentina');
}

export default function MediviaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="medivia-high-exp-server-argentina" />;
}
