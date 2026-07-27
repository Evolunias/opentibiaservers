import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-active');
}

export default function TibiaOtServerActiveKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-active" />;
}
