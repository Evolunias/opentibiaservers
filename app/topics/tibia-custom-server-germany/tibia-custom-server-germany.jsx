import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-germany');
}

export default function TibiaCustomServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-germany" />;
}
