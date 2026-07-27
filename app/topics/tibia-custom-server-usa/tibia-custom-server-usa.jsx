import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-usa');
}

export default function TibiaCustomServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-usa" />;
}
