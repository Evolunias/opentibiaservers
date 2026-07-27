import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-latin-america-server');
}

export default function NoxiousotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-latin-america-server" />;
}
