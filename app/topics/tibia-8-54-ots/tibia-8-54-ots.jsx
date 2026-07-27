import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-ots');
}

export default function Tibia854OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-ots" />;
}
