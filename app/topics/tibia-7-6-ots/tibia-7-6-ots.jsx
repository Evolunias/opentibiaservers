import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-ots');
}

export default function Tibia76OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-ots" />;
}
