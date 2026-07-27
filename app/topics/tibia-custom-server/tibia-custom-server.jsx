import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server');
}

export default function TibiaCustomServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server" />;
}
