import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-fun-server');
}

export default function NoxiousotFunServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-fun-server" />;
}
