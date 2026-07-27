import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-low-exp-server-sweden');
}

export default function NoxiousotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-low-exp-server-sweden" />;
}
