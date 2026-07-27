import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-active');
}

export default function TibiaCustomServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-active" />;
}
