import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-high-exp-server-sweden');
}

export default function NoxiousotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-high-exp-server-sweden" />;
}
