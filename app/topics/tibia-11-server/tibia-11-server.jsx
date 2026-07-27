import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-server');
}

export default function Tibia11ServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-server" />;
}
