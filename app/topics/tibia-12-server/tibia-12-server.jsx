import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-server');
}

export default function Tibia12ServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-server" />;
}
