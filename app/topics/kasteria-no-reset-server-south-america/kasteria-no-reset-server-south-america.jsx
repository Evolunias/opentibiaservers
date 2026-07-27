import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-south-america');
}

export default function KasteriaNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-south-america" />;
}
