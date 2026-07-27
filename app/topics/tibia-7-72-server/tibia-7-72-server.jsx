import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-server');
}

export default function Tibia772ServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-server" />;
}
