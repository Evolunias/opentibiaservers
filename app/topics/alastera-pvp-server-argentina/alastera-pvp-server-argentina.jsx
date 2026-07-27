import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-argentina');
}

export default function AlasteraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-argentina" />;
}
