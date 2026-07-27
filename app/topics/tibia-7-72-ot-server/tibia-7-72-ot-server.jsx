import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-ot-server');
}

export default function Tibia772OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-ot-server" />;
}
