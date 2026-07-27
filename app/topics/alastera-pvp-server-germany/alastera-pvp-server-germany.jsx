import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-germany');
}

export default function AlasteraPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-germany" />;
}
