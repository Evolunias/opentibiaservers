import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-low-exp-server-sweden');
}

export default function MediviaLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="medivia-low-exp-server-sweden" />;
}
