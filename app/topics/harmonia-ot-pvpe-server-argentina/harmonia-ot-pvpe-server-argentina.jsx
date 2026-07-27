import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-pvpe-server-argentina');
}

export default function HarmoniaOtPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-pvpe-server-argentina" />;
}
