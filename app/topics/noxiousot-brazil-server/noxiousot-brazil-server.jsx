import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-brazil-server');
}

export default function NoxiousotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-brazil-server" />;
}
