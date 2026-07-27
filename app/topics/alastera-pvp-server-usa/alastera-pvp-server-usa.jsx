import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-usa');
}

export default function AlasteraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-usa" />;
}
