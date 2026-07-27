import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-germany');
}

export default function TibiaOtServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-germany" />;
}
