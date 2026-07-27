import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-poland-server');
}

export default function NoxiousotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-poland-server" />;
}
