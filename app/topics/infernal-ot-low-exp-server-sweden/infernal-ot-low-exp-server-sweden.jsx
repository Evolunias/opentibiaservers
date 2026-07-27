import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-low-exp-server-sweden');
}

export default function InfernalOtLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-low-exp-server-sweden" />;
}
