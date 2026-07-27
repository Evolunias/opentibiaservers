import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-ots');
}

export default function Tibia96OtsKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-ots" />;
}
