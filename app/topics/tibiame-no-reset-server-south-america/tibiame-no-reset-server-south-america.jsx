import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-south-america');
}

export default function TibiameNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-south-america" />;
}
