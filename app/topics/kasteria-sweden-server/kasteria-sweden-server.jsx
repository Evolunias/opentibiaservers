import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-sweden-server');
}

export default function KasteriaSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-sweden-server" />;
}
