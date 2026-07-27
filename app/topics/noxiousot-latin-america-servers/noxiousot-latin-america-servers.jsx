import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-latin-america-servers');
}

export default function NoxiousotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-latin-america-servers" />;
}
