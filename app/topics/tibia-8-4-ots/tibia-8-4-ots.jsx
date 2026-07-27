import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-ots');
}

export default function Tibia84OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-ots" />;
}
