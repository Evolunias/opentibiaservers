import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-ot-server');
}

export default function Tibia81LowExpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-ot-server" />;
}
