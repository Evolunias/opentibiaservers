import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-brazil-servers');
}

export default function NoxiousotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-brazil-servers" />;
}
