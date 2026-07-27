import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-ot-server');
}

export default function Tibia74OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-ot-server" />;
}
