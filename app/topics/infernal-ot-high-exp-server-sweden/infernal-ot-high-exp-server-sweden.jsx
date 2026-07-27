import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-high-exp-server-sweden');
}

export default function InfernalOtHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-high-exp-server-sweden" />;
}
